import mainPage from './mainPage';
import loginPage from './loginPage';
import profilePage from './profilePage';

pages.openPage('login');
loginPage.handleEvents();
mainPage.handleEvents();
profilePage.handleEvents();
