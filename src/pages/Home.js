import HomeContacts from '../components/HomeContacts/HomeContacts';
import ProcessSteps from '../components/ProcessSteps/ProcessSteps';
import Header from './../components/header/Header'
import Services from './../components/services/Services';
import WorkSchedule from '../components/WorkSchedule/WorkSchedule';

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<Services />
				</div>
				<div className="container">
					<ProcessSteps />
				</div>
				<div className="container">
					<WorkSchedule />
				</div>
				<div className="container">
					<HomeContacts />
				</div>
			</main>
		</>
	);
}

export default Home;