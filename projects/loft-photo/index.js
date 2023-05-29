import mainPage from './mainPage';
import loginPage from './loginPage';
import profilePage from './profilePage';
import pages from './pages';
import('./styles.css');

pages.openPage('login');
loginPage.handleEvents();
mainPage.handleEvents();
profilePage.handleEvents();
