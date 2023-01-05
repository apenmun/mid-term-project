const obtenerPokemons = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log(data.results);
    return data;
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemons();

const HTMLResponse = document.querySelector('#app');

//Button para Contact us
document.getElementById("btnContact").addEventListener("click", e=>{window.location.href = "contactus.html"});






