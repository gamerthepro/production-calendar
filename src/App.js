import './App.scss';

function App() {
	return (
		<div className="calendar__container">
			<div className="calendar__header">
				<input className="calendar__search"></input>
				<h1 className="calendar__title">september</h1>
			</div>
			<div className="calendar__main">
				<ul className="calendar__users">User
					<li className="user__name">Roma</li>
					<li className="user__name">Vika</li>
					<li className="user__name">Pasha</li>
					<li className="user__name">Masha</li>
				</ul>
				<div className="calendar__data">
					<ul className="calendar__days">
						<li className="day__item">1</li>
						<li className="day__item">2</li>
						<li className="day__item">3</li>
						<li className="day__item">4</li>
					</ul>
					<ul className="calendar__time">
						<li className="time__item">3:22</li>
						<li className="time__item">3:22</li>
						<li className="time__item">3:22</li>
						<li className="time__item">3:22</li>
					</ul>
					<ul className="calendar__time">
						<li className="time__item">3:22</li>
						<li className="time__item">3:22</li>
						<li className="time__item">3:22</li>
						<li className="time__item">3:22</li>
					</ul>
					<ul className="calendar__time">
						<li className="time__item">3:22</li>
						<li className="time__item">3:22</li>
						<li className="time__item">3:22</li>
						<li className="time__item">3:22</li>
					</ul>
					<ul className="calendar__time">
						<li className="time__item">3:22</li>
						<li className="time__item">3:22</li>
						<li className="time__item">3:22</li>
						<li className="time__item">3:22</li>
					</ul>
				</div>
				<ul className="calendar__results">Monthly total
					<li className="result__item"></li>
					<li className="result__item"></li>
					<li className="result__item"></li>
					<li className="result__item"></li>
				</ul>
			</div>
		</div>
	);
}

export default App;
