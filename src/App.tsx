import DaysComp from './DaysComp';
import Hours from './Hours';
import Lecture from './Lecture';
import Plan from './Plan';
import Splitter from './Splitter';

const App = () => {
	return (
		<div className='flex items-center justify-center min-h-screen'>
			<div
				className='border rounded-md grid w-5/6 mb-16'
				style={{ gridTemplateColumns: '60px 1fr' }}>
				<div className='col-span-2 bg-stone-600 text-white font-bold p-2 rounded-t-md'>
					Plan zajęć: AGH, ISI 2023/24 - S2
				</div>
				<div></div>
				<DaysComp />
				<Hours />
				<Plan>
					<Lecture
						col={1}
						group={1}
						timeStart='11:30'
						timeStop=' 13:00'
						lectureType='W'
						name='Teoria grafów - Adam Sędziwy (H24 bud. HB1B2)'
					/>
					<Lecture
						col={1}
						group={1}
						timeStart='16:45'
						timeStop=' 18:15'
						lectureType='W'
						name='Matematyka dyskretna - Andrzej Bielecki (224 bud. C2)'
					/>
					<Lecture
						col={2}
						group={1}
						timeStart='7:45'
						timeStop=' 9:15'
						lectureType='W'
						name='Rachunek prawdopodobieństwa i statystyka - Marek Adrian (429 bud.
							C2)'
					/>
					<Lecture
						col={2}
						group={1}
						timeStart='9:45'
						timeStop=' 11:15'
						lectureType='W'
						name='Fizyka 1 - Magdalena Szczerbowska-Boruchowska (B bud. D10)'
					/>
					<Lecture
						col={2}
						group={8}
						timeStart='11:45'
						timeStop=' 13:15'
						lectureType='CWL'
						name='Rachunek prawdopodobieństwa i statystyka - Marek Adrian (316 bud.
							C2)'
					/>
					<Lecture
						col={2}
						group={1}
						timeStart='18:30'
						timeStop=' 20:00'
						lectureType='W'
						name='Podstawy grafiki komputerowej - Jędrzej Byrski (on-line bud. B1)'
					/>
					<Lecture
						col={3}
						group={8}
						timeStart='8:00'
						timeStop=' 9:30'
						lectureType='CWL'
						name='Badania operacyjne - Mateusz Ślażyński (316 bud. C2)'
						evenWeeksOnly
					/>
					<Splitter cols={2} col={3}>
						<Lecture
							col={1}
							group={1}
							timeStart='13:15'
							timeStop=' 14:45'
							lectureType='W'
							name='Badania operacyjne - Mateusz Ślażyński (224 bud. C2)'
							oddWeeksOnly
						/>
						<Lecture
							col={2}
							group={1}
							timeStart='13:15'
							timeStop=' 15:30'
							lectureType='W'
							name='Wprowadzanie do systemów inteligentnych - Weronika Adrian (224 bud. C2)'
							evenWeeksOnly
						/>
					</Splitter>
					<Lecture
						col={3}
						group={1}
						timeStart='19:00'
						timeStop=' 20:30'
						lectureType='W'
						name='Podstawy programowania 2 - Piotr Szwed (on-line bud. B1)'
					/>
					<Lecture
						col={4}
						group={4}
						timeStart='8:00'
						timeStop=' 9:30'
						lectureType='CWA'
						name='Teoria grafów - Adam Sędziwy (210 bud. B5)'
					/>
					<Lecture
						col={4}
						timeStart='12:00'
						timeStop=' 13:30'
						lectureType='LEKT'
						name='Język angielski 1/3 (3.09 bud. C7)'
					/>
					<Lecture
						col={4}
						group={4}
						timeStart='15:00'
						timeStop=' 16:30'
						lectureType='CWA'
						name='Fizyka 1 - Dariusz Węgrzynek (104 bud. D11)'
						evenWeeksOnly
					/>
					<Lecture
						col={4}
						group={4}
						timeStart='16:45'
						timeStop=' 18:15'
						lectureType='CWA'
						name='Algorytmy i struktury danych - Dariusz Węgrzynek (216 bud. C2)'
					/>
					<Lecture
						col={4}
						group={4}
						timeStart='18:30'
						timeStop=' 20:00'
						lectureType='CWA'
						name='Matematyka dyskretna - Krystian Jobczyk (010 bud. B1)'
						evenWeeksOnly
					/>
					<Lecture
						col={5}
						group={1}
						timeStart='8:00'
						timeStop=' 9:30'
						lectureType='W'
						name='Algorytmy i struktury danych - Konrad Kułakowski (224 bud. C2)'
					/>
					<Lecture
						col={5}
						group={8}
						timeStart='9:45'
						timeStop=' 11:15'
						lectureType='CWL'
						name='Podstawy programowania 2 - Grzegorz Bazior (511a bud. C1)'
					/>
					<Lecture
						col={5}
						group={33}
						timeStart='11:45'
						timeStop=' 12:30'
						lectureType='WF'
						name='Wychowanie fizyczne 2 - basen'
					/>
					<Lecture
						col={5}
						group={8}
						timeStart='13:15'
						timeStop=' 14:45'
						lectureType='CWL'
						name='Podstawy grafiki komputerowej - Mirosław Gajer (214 bud. C2)'
					/>
				</Plan>
			</div>
		</div>
	);
};

export default App;