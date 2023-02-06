let slider = document.getElementById("slider"),
  span = document.querySelector(".fillInput"),
  pageViews = document.getElementById("pageviews"),
  price = document.getElementById("price"),
  checkbox = document.getElementById("check"),
  isChecked = "monthly",
  discount = 0.25,
  yearly,
  monthly;

// function handler for handling price after and before discount
const handlePrice = (int) => {
  yearly = parseFloat(int) - parseFloat(int) * discount;
  monthly = parseFloat(int) * discount + yearly;
  price.innerHTML =
    isChecked == "monthly"
      ? monthly.toFixed(2)
      : yearly.toFixed(2);
};
handlePrice(price.innerHTML); //handle default price

//toggle checkbox "monthly / yearly" and toggle monthly / yearly price 
checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    isChecked = "yearly";
    price.innerHTML = yearly.toFixed(2);
  } else {
    isChecked = "monthly";
    price.innerHTML = monthly.toFixed(2);
  }
});

//switch cases for changing DOM content
slider.addEventListener("input", (e) => {
  let val = Number(e.target.value);
  switch (val) {
    case 25:
      span.style.width = `${val - 2.5}%`;         //change span width value
      pageViews.innerHTML = "50K";                //change pageviews content
      handlePrice((price.innerHTML = "12.00"));   //handle price in this case
      break;
    case 50:
      span.style.width = `${val - 5}%`;
      pageViews.innerHTML = "100K";
      handlePrice((price.innerHTML = "16.00"));
      break;
    case 75:
      span.style.width = `${val - 7.5}%`;
      pageViews.innerHTML = "500K";
      handlePrice((price.innerHTML = "24.00"));
      break;
    case 100:
      span.style.width = `${val - 10.5}%`;
      pageViews.innerHTML = "1M";
      handlePrice((price.innerHTML = "36.00"));
      break;
    default:
      span.style.width = `${val}%`;
      pageViews.innerHTML = "10K";
      handlePrice((price.innerHTML = "8.00"));
  }
});
