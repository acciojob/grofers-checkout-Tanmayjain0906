const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const table = document.getElementsByTagName("table")[0];
const price = document.getElementsByClassName("price");

const getSum = () => {
 let totalAmount = 0;

	for(let i=0;i<price.length;i++)
		{
			let amount = Number(price[i].innerText);
			totalAmount += amount;
		}

	let tr = document.createElement("tr");
	let td1 = document.createElement("td");
	td1.innerText = "Total";

	let td2 = document.createElement("td");
     td2.innerText = totalAmount;

	tr.append(td1,td2);

	table.appendChild(tr);	
};

getSumBtn.addEventListener("click", getSum);

