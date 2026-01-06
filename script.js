document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#ip-form");

  form.addEventListener("submit", formSended);
});

const formSended = (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("#ip-input").value.trim();

  if (!inputValue) return;

  searchIp(inputValue);
};

const searchIp = async (ip) => {
  const url = "https://ip.guide";
  let isValid = true;

  try {
    const response = await fetch(`${url}/${ip}`);
    if (!response.ok) {
      isValid = false;
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    showResults(result, ip, isValid);
  } catch (error) {
    showResults(error.message, ip, isValid);
  }
};

const showResults = (answer, ip, isValid) => {
  const result = document.querySelector(".res-info");

  if(!isValid) {
    result.innerHTML = `<h2>Not Found</h2>
    <div>This isn't a valid IP: <strong>${ip}</strong></div>`;
    return;
  }

  result.innerHTML = `
    <h2>IP Information</h2>

    <div>
      <strong>IP:</strong> ${answer.ip}
    </div>

    <h3>📍 Location</h3>
    <ul>
      <li><strong>Country:</strong> ${answer.location.country}</li>
      <li><strong>City:</strong> ${answer.location.city ?? "N/A"}</li>
      <li><strong>Latitude:</strong> ${answer.location.latitude}</li>
      <li><strong>Longitude:</strong> ${answer.location.longitude}</li>
      <li><strong>Timezone:</strong> ${answer.location.timezone}</li>
    </ul>

    <h3>🌐 Network</h3>
    <ul>
      <li><strong>CIDR:</strong> ${answer.network.cidr}</li>
      <li><strong>Host range:</strong> ${answer.network.hosts.start} - ${answer.network.hosts.end}</li>
    </ul>

    <h3>🏢 Autonomous System</h3>
    <ul>
      <li><strong>ASN:</strong> ${answer.network.autonomous_system.asn}</li>
      <li><strong>Name:</strong> ${answer.network.autonomous_system.name}</li>
      <li><strong>Organization:</strong> ${answer.network.autonomous_system.organization}</li>
    </ul>
  `;

//   showMap(answer);
};

const showMap = (answer) => {

}