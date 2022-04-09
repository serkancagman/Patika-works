const root = document.querySelector("#root");

const apiUrl = "https://jsonplaceholder.typicode.com/albums";

const getData = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  render(data);
};

const render = (data) => {
  const template = data
    .map((item) => {
      return `
            <div class="card">
                <img src="${item.thumbnailUrl}" alt="${item.title}">
                <h2>${item.title}</h2>
            </div>
        `;
    })
    .join("");

  root.innerHTML = template;
};
getData();
