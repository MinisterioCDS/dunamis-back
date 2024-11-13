fetch(`${process.env.URL}/inscriptos`).then(res => res.json().then(response => {
  const body = document.getElementsByTagName("body")[0];
  const count = document.createElement("h3");
  count.innerHTML = response.cantidad;
  body.appendChild(count);
  for (joven of response.jovenes) {
    const card = document.createElement("div");
    const name = document.createElement("p");
    const lastname = document.createElement("p");
    const age = document.createElement("p");
    const phone = document.createElement("p");
    name.innerHTML = joven.name;
    lastname.innerHTML = joven.lastname;
    age.innerHTML = joven.age;
    phone.innerHTML = joven.phone;
    card.appendChild(name);
    card.appendChild(lastname);
    card.appendChild(age);
    card.appendChild(phone);
    body.appendChild(card);
    console.log(card);
  };
})).catch(error => {
  console.log(error);
});