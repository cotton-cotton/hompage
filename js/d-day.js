const newDay = document.querySelector('.d-day');
const newDayTime = document.querySelector('.d-day-time');

function getTime() {
	const wecode = new Date("2021-11-01:00:00:00+0900");
  const otherMonth = wecode.getMonth() + 1;
  const otherDate = wecode.getDate();

	const currentDate = new Date();
	const gap = wecode - currentDate;
	const day = Math.floor(gap / (1000 * 60 * 60 * 24));
	const hours = String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(
		2,
		"0"
	);
	const minutes = String(Math.floor(((gap / 1000) * 60) % 60)).padStart(2, "0");

  newDay.textContent = `${otherMonth}월 ${otherDate}일 까지`;
	newDayTime.textContent = `${day}일 ${hours}시간 ${minutes}분`;
}

function init() {
	getTime();
	setInterval(getTime, 1000);
}
init();

