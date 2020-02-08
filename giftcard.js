const Product_Key = "order";
var s = 1;
function myfun1() {
    document.getElementById("ph2").focus();
}
function myfun2() {
    document.getElementById("ph3").focus();
} 
function myfun3() {
    document.getElementById("ph4").focus();
} 
function myfun4() {
    document.getElementById("ph5").focus();
} 
function myfun5() {
    document.getElementById("ph6").focus();
} 
function myfun6() {
    document.getElementById("ph7").focus();
} 
function myfun7() {
    document.getElementById("ph8").focus();
} 
function myfun8() {
    document.getElementById("ph9").focus();
} 
function myfun9() {
    document.getElementById("ph10").focus();
} 
function myfun10() {
    document.getElementById("email").focus();
} 
function getOrdersFromLocalStorage()
 {
    let orders = [];

    if (localStorage.getItem(Product_Key)) {
        orders = JSON.parse(localStorage.getItem(Product_Key));
    }
    return orders;
}


function addOrderFormSubmit()
{
    //var pat2 = /^\d{6}$/;
    //let ph = document.getElementById("ph1").value;
    //if (ph != @"[6-9]\d{1}")
    //    alert("Enter Correct Mobile Number");
    let pcd = document.getElementById("pincode").value;
    if (pcd.length<6) {
        alert("Pincode Should Of Length 6");
        document.getElementById("pincode").focus();
        return false;
    }
    let orders = getOrdersFromLocalStorage();
    let bn1 = document.getElementById("bn1").value;
    let bn2 = document.getElementById("bn2").value;
    let sa1 = document.getElementById("sa1").value;
    let cty = document.getElementById("city").value;
    let sta = document.getElementById("state").value;
    let ctry = document.getElementById("country").value;

    let phno = document.getElementById("phone").value;
    let phno1 = document.getElementById("ph1").value;
    let phno2 = document.getElementById("ph2").value;
    let phno3 = document.getElementById("ph3").value;
    let phno4 = document.getElementById("ph4").value;
    let phno5 = document.getElementById("ph5").value;
    let phno6 = document.getElementById("ph6").value;
    let phno7 = document.getElementById("ph7").value;
    let phno8 = document.getElementById("ph8").value;
    let phno9 = document.getElementById("ph9").value;
    let phno10 = document.getElementById("ph10").value;
    let amt1 = document.getElementById("amt1").value;
    let amt2 = document.getElementById("amt2").value;
	let amt=amt1+"."+amt2;
    let bn = bn1 + " " + bn2;
    let sadd = sa1+", "+cty+", "+sta+", "+ctry+", "+pcd;
    let phon = phno+phno1+phno2+phno3+phno4+phno5+phno6+phno7+phno8+phno9+phno10;
    let order = {
        bname:bn,
		saddress:sadd,
		city:cty,
		amount:parseFloat(amt),
        phone:phon
    };

    orders.push(order);
    localStorage.setItem(Product_Key, JSON.stringify(orders));
}

function loadOrder()
 {
    let orders = getOrdersFromLocalStorage();
    let tableBody = document.getElementById("prdData");

    for (let order of orders) {
        let prdRow = createOrderRow(order);
        tableBody.append(prdRow);
    }
}

function createOrderRow(order)
{
    
    let snoCol = document.createElement("td");
    snoCol.textContent = s++;

    let bnameCol = document.createElement("td");
      bnameCol.textContent = order.bname;

    let saddCol = document.createElement("td");
    saddCol.textContent = order.saddress;
	
	    let cityCol = document.createElement("td");
    cityCol.textContent = order.city;
	
	    let amtCol = document.createElement("td");
    amtCol.textContent = order.amount;
	
	    let phnoCol = document.createElement("td");
    phnoCol.textContent = order.phone;

    let prdRow = document.createElement("tr");
    prdRow.append(snoCol);
    prdRow.append(bnameCol);
    prdRow.append(saddCol);
	prdRow.append(cityCol);
	prdRow.append(amtCol);
	prdRow.append(phnoCol);
    return prdRow;

}