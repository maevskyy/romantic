import './styles/App.css';
import Header from '../widjets/header';
import Main from '../widjets/main';
import Footer from '../widjets/footer';
import { useState } from 'react';
import BurgetMenu from '../widjets/header/BurgetMenu';

const App = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className='app h-[100svh] '>
			<Header setopenMenu={setOpenMenu} />
			{openMenu && <BurgetMenu setOpenMenu={setOpenMenu} />}
			<Main />
			<Footer />
		</div>
	);
};

export default App;
