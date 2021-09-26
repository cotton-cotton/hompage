/** @format */

const clock = document.querySelector(".clock");
const date = document.querySelector(".date");


const week = ['월', '화', '수', '목', '금', '토', '일'];



function getClock() {
	const currentDate = new Date();
  const month = String(currentDate.getMonth()).padStart(2, "0");
  const monthDate = String(currentDate.getDate()).padStart(2, "0");
  const day = week[currentDate.getDay()];
	const hours = String(currentDate.getHours()).padStart(2, "0");
	const minutes = String(currentDate.getMinutes()).padStart(2, "0");
	const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  date.innerText = `${month}월 ${monthDate}일 ${day}`;
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
