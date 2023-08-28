import React, {useState} from 'react';
import './Login.css';
import { faPlusCircle, faTimesCircle, faTimes, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const [showLoginWindow, setShowLoginWindow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showSignupWindow, setShowSignupWindow] = useState(false);

  const handleButtonIconClick = () => {
    setShowLoginWindow(true);
  }

  const handleButtonClick = () => {
    setShowSignupWindow(true);
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  const handleCloseWindow = () => {
    setShowLoginWindow(false);
  }

  const closeWindow = () => {
    setShowSignupWindow(false);
  }

  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index);

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  return (
    <div className="login_body">
      <header className="login_header">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="Facebook"
        />
        <div>
          <h2>Recent Logins</h2>
          <p>Click your picture or add an account.</p>
        </div>

        <div className='card'>
            <button className='buttonIcon' onClick={handleButtonIconClick}>
              <FontAwesomeIcon icon={faPlusCircle} className="circle-icon" />
            </button>

            <div className='foot'>
              <p>
                Add Account
              </p>
            </div>
              {
                showLoginWindow && (
                  <div className='loginWindow'>
                    {
                      <div className='window'>
                        <div className='windowHeader'>
                          <h1>Log Into Facebook</h1>
                          <FontAwesomeIcon icon={faTimesCircle} onClick={handleCloseWindow} className='timesCircle'/>
                        </div>
                        <hr className='windowHr'/>
                        <div className='windowInput'>
                          <input placeholder='Email or phone number' 
                                  value={emailOrPhone}
                                  onChange={(e) => setEmailOrPhone(e.target.value)}/>
                          <input placeholder='Password'
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className='checkBox'>
                          <label>
                            <input type='checkbox'
                                  checked={isChecked}
                                  onChange={handleCheckboxChange}
                                  className='case'
                            /> Remember Password
                          </label>
                        </div>
                        <button className='window_loginButton'>
                          Log in
                        </button>
                        <Link className='auth'>Forget password?</Link>                        
                      </div>
                    }
                  </div>)
                  }
        </div>
      </header>

        <div className='login_section'>  
          <div className='identifiants'>        
            <div className='input'>
              <input placeholder='Email or Phone Number'
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}/>
              <input placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
              </div>
            <button className='login_button'>
              Log in
            </button>
            <Link className='auth'>Forget password?</Link>

            <hr/>

            <button  className='signupButton' onClick={handleButtonClick}>
                Create new account
            </button>
            {
              showSignupWindow && (
                <div className='signupWindow'>
                  {
                    <div className='window1'>
                      <div className='signupHeader'>
                        <div className='signupText'>
                          <h1>Sign Up</h1>
                          <p>It's quick and easy.</p>
                        </div>
                        <FontAwesomeIcon icon={faTimes} onClick={closeWindow} className='timesIcon'/>
                      </div>

                      <hr className='signupHr'></hr>

                      <div className='windowInput'>
                        <div className='nameInput'>
                          <input className='inputsName' placeholder='First name'/>
                          <input className='inputsName'placeholder='Last name'/>
                        </div>
                        <input className='inputs' placeholder='Mobile number ou email'/>
                        <input className='inputs' placeholder='New password'/>
                      </div>
                      
                      <div className='birthdayLabel'>
                        <label>
                          Birthday <FontAwesomeIcon icon={faQuestionCircle}/>                          
                        </label>
                        <div className='date_dropDown'>                                           
                          <select className='bgOption' value={selectedMonth} onChange={handleMonthChange}>
                            <option value="">Month</option>
                            {months.map((month, index) => (
                              <option key={month} value={index + 1}>{month}</option>
                            ))}
                          </select>

                          <select className='bgOption' value={selectedDay} onChange={handleDayChange}>
                            <option value="">Day</option>
                            {days.map(day => (
                            <option key={day} value={day}>{day}</option>
                            ))}
                          </select>
                          
                          <select className='bgOption' value={selectedYear} onChange={handleYearChange}>
                            <option value="">Year</option>
                            {years.map(year => (
                              <option key={year} value={year}>{year}</option>
                            ))}
                          </select>

                          {selectedDay && selectedMonth && selectedYear && (
                            <p>Selected date: {selectedMonth}/{selectedDay}/{selectedYear}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className='genderLabel'>
                        <label >Gender <FontAwesomeIcon icon={faQuestionCircle}/></label>
                        <div className='gender_dropDown'>
                            <label className='bordered-option'>
                              <input
                                className='caseBox'
                                type="radio"
                                value="male"
                                checked={gender === 'male'}
                                onChange={handleGenderChange}
                              />
                              Male
                            </label>

                            <label className='bordered-option'>
                              <input
                                className='caseBox'
                                type="radio"
                                value="female"
                                checked={gender === 'female'}
                                onChange={handleGenderChange}
                              />
                              Female
                            </label>

                            <label className='bordered-option'>                      
                              <input className='caseBox'
                                type="radio"
                                value="other"
                                checked={gender === 'other'}
                                onChange={handleGenderChange}
                              />
                              Other
                            </label>
                          </div>
                        </div>

                      <div className='info'>
                        <p>
                        People who use our service may have uploaded your contact information to Facebook. <a href="#">Learn more.</a>                          
                        </p>
                          <br/>
                        <p>
                        By clicking Sign Up, you agree to our <a>Terms, Privacy Policy</a> and <a>Cookies Policy</a>. You may receive SMS Notifications from us and can opt out any time.
                        </p>
                      </div>
                      <button className='signupButton'>
                        Sign Up
                      </button>
                    </div>
                  }
                </div>

              )
            }
          </div>
          <p> <span>Create a Page</span>, for a celebrity, brand or business.</p>
        </div>
    </div>
  );
}

export default Login;
