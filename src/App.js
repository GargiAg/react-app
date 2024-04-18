import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router';
import './App.css';

const options = [
  { id: 1, label: 'Student or soon to be enrolled', value: 'student', image: 'https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?t=st=1712041366~exp=1712044966~hmac=3a484fdd8d79e9e47ce0bc80966125c18007402d0040b2f95fcd26e3a06a86b3&w=740' },
  { id: 2, label: 'Professional pursuing a career', value: 'professional', image: 'https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?t=st=1712041366~exp=1712044966~hmac=3a484fdd8d79e9e47ce0bc80966125c18007402d0040b2f95fcd26e3a06a86b3&w=740' },
  { id: 3, label: 'Parent of a school-age child', value: 'parent', image: 'https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?t=st=1712041366~exp=1712044966~hmac=3a484fdd8d79e9e47ce0bc80966125c18007402d0040b2f95fcd26e3a06a86b3&w=740' },
  { id: 4, label: 'Lifelong learner', value: 'lifelong-learner', image: 'https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?t=st=1712041366~exp=1712044966~hmac=3a484fdd8d79e9e47ce0bc80966125c18007402d0040b2f95fcd26e3a06a86b3&w=740' },
  { id: 5, label: 'Teacher', value: 'teacher', image: 'https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?t=st=1712041366~exp=1712044966~hmac=3a484fdd8d79e9e47ce0bc80966125c18007402d0040b2f95fcd26e3a06a86b3&w=740' },
  { id: 6, label: 'Other', value: 'other', image: 'https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?t=st=1712041366~exp=1712044966~hmac=3a484fdd8d79e9e47ce0bc80966125c18007402d0040b2f95fcd26e3a06a86b3&w=740' },
];

const newOptions = [
  { id: 7, label: 'Learning specific skills to advance my career', value: 'Learning specific skills', image: 'https://via.placeholder.com/150' },
  { id: 8, label: 'Exploring new topic I am interesred in', value: 'Topic of interest', image: 'https://via.placeholder.com/150' },
  { id: 9, label: 'Refreshing my math foundations', value: 'Math Foundation', image: 'https://via.placeholder.com/150' },
  { id: 10, label: 'Exercising my brain to stay sharp', value: 'Brain exercise', image: 'https://via.placeholder.com/150' },
  { id: 11, label: 'Something else', value: 'Else', image: 'https://via.placeholder.com/150' }
  
];

const newOptions2 = [
  { id: 12, label: 'New Option 1', value: 'new-option-1', image: 'https://via.placeholder.com/150' },
  { id: 13, label: 'New Option 2', value: 'new-option-2', image: 'https://via.placeholder.com/150' },
  { id: 14, label: 'New Option 3', value: 'new-option-3', image: 'https://via.placeholder.com/150' },
  { id: 15, label: 'New Option 4', value: 'new-option-4', image: 'https://via.placeholder.com/150' }
];

const ProgressBar = ({ progress }) => {
  const progressBarStyle = {
    width: `${progress * 20}%`, // Assuming 5 pages, each page represents 20% of progress
    backgroundColor: 'green',
    height: '3px',
    transition: 'width 0.3s ease', // Transition effect for smoother progress
  };

  return (
    <div className="progress-bar" style={{ marginBottom: '10px', marginLeft:'5px' }}>
      <div style={progressBarStyle}></div>
    </div>
  );
};

function Option({ option, isSelected, onOptionClick }) {
  const handleClick = () => {
    if (isSelected) {
      onOptionClick('');
    } else {
      onOptionClick(option.value);
    }
  };

  return (
    <div className="option-container">
      <input
        type="checkbox"
        id={option.value}
        name="describe"
        value={option.value}
        checked={isSelected}
        onChange={() => {}}
      />
      <label
        htmlFor={option.value}
        className={isSelected ? 'selected' : ''}
        onClick={handleClick}
      >
        <img src={option.image} alt={option.label} className="option-image" />
        {option.label}
      </label>
    </div>
  );
}

function YourHomeComponent({ options, onSelectOption }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (selectedValue) => {
    setSelectedOption(selectedValue);
  };

  const handleContinueClick = () => {
    if (selectedOption) {
      onSelectOption(selectedOption);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Which describes you best?</h1>
        <p>This will help us personalize your experience.</p>
        <div className="options">
          {options.map((option) => (
            <Option
              key={option.id}
              option={option}
              isSelected={selectedOption === option.value}
              onOptionClick={handleOptionClick}
            />
          ))}
        </div>
        <button
          className="continue-button"
          onClick={handleContinueClick}
          disabled={!selectedOption}
          style={{ backgroundColor: selectedOption ? 'black' : 'gray' }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

const NewPage = ({ options, onSelectOption }) => {
  return (
    <div className="App">
      <YourHomeComponent options={options} onSelectOption={onSelectOption} />
    </div>
  );
};

const Page2 = ({ setPage }) => {
  const handleContinueClick = () => {
    setPage(3);
  };

  return (
    <div className="page2-container">
      <div className='page2-content'>
        <div className="section1">
          <img src="https://images.pexels.com/photos/267415/pexels-photo-267415.jpeg" alt="dfwe" className="section-image" />
        </div>
        <div className="section2">
          <h2>Main Heading</h2>
          <p>Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.</p>
        </div>
      </div>
      <div>
      <button className="continue-button" onClick={handleContinueClick}>
        Continue
      </button>
      </div>
    </div>
  );
};

const Page3 = ({ options, onSelectOption, setPage }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (selectedValue) => {
    if (selectedOption === selectedValue) {
      // Deselect the option if clicked again
      setSelectedOption('');
    } else {
      // Toggle the selected option
      setSelectedOption(selectedValue);
    }
  };

  const handleContinueClick = () => {
    if (selectedOption) {
      onSelectOption(selectedOption);
    }

    setPage(4);
  };

  return (
    <div className="page3-container">
      <h1>Select an option:</h1>
      <div className="options">
        {options.map((option) => (
          <div
            key={option.id}
            className={`option-box ${selectedOption === option.value ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option.value)}
          >
            <span>{option.label}</span>
          </div>
        ))}
      </div>
      <button className="continue-button"
          onClick={handleContinueClick}
          disabled={!selectedOption}
          style={{ backgroundColor: selectedOption ? 'black' : 'gray' }}>
        Continue
      </button>
    </div>
  );
};

const Page4 = ({ setPage }) => {
  const handleContinueClick = () => {
    setPage(5);
  };

  return (
    <div className="page2-container">
      <div className="page2-content">
        <div className="section1">
          <img src="https://images.pexels.com/photos/267415/pexels-photo-267415.jpeg" alt="dfwe" className="section-image" />
        </div>
        <div className="section2">
          <h2>Main Heading</h2>
          <p>Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.</p>
        </div>
      </div>
      <button className="continue-button" onClick={handleContinueClick}>
        Continue
      </button>
    </div>
  );
};

const LearningPaths = () => {
  const [selectedPath, setSelectedPath]=useState(null);

  const paths = [
    {
      id:1,
      name: 'Foundational Math',
      description: 'Build your foundational skills in algebra, geometry, and probability.',
      popularity: 'MOST POPULAR',
      image: 'https://cdn-icons-png.freepik.com/512/2021/2021712.png',
    },
    {
      id:2,
      name: 'Mathematical Thinking',
      description: 'Build your foundational skills in algebra, geometry, and probability.',
      image: 'https://cdn-icons-png.freepik.com/512/2021/2021712.png',
    },
  ];

  const handlePathClick = (pathId) => {
    // Toggle the selected path
    setSelectedPath((prevSelectedPath) =>
      prevSelectedPath === pathId ? null : pathId
    );
  };

  return (
    <div className='last-page'>
      <div className='last-page-header'>
      <h1>Learning paths based on your answers</h1>
      <p>Choose one to get started. You can switch anytime.</p>
      </div>
      
      <ul>
        {paths.map((path) => (
          <li className={`inside-content ${selectedPath === path.id ? 'selected' : ''}`} key={path.id} onClick={() => handlePathClick(path.id)}>
            <div>
              {/* <h2>{path.name}</h2> */}
              <p><strong>{path.name}</strong> {path.description}</p>
            </div>       
            <div>
              <img src={path.image} alt="hgh" />
              {path.popularity && <span >{path.popularity}</span>}
              {/* {selectedPath === path.id && <span>Selected</span>} */}
            </div>
        </li>
        ))}
      </ul>
    </div>
  );
};

function LoadingScreen({setPage}) {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prevProgress =>
        prevProgress >= 100 ? 100 : prevProgress + 1
      );
    }, 10); // Increased interval for smoother animation

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loadingProgress >= 100) {
      setTimeout(() => {
        setPage(6); // Navigate to LearningPaths by updating the page state
      }, 1000); // 1000 milliseconds = 1 second
    }
  }, [loadingProgress, setPage]);

  const spinnerStyle = {
    transform: `rotate(${loadingProgress * 3.6}deg)`, // Convert loading progress to degrees
  };

  return (
    <div className="loading-screen">
      <div className="loading-animation">
        <div className="spinner" style={spinnerStyle}></div>
        <p className="para">Finding learning path recommendations for you based on your responses</p>
      </div>
    </div>
  );
}






export default function App() {
  const [page, setPage] = useState(0);

  const renderPage = () => {
    switch (page) {
      case 0:
        return (
          <>
          <ProgressBar progress={1}/>
          <YourHomeComponent
            options={options}
            onSelectOption={() => setPage(page + 1)}
          />
          </>
        );
      case 1:
        return (
          <>
          <ProgressBar progress={2} />
          <NewPage
            options={newOptions}
            onSelectOption={() => setPage(page + 1)}
          />
          </>
        );
      case 2:
        return(
          <>
          <ProgressBar progress={3} />
          <Page2 setPage={setPage} />
          </>
        ) ;
      case 3:
        return (
          <>
          <ProgressBar progress={4}/>
          <Page3
            options={newOptions2}
            onSelectOption={(selectedOption) => setPage(page + 1)}
            setPage={setPage}
          />
          </>
        );
      case 4:
        return(
          <>
          <ProgressBar progress={5}/>
          <Page4 setPage={setPage} />
          </>
        );
         
      case 5:
        return <LoadingScreen setPage={setPage} />;
      case 6:
        return <LearningPaths setPage={setPage} />;
        
      default:
        return <div>Page not found</div>;
    }
  };

  return <div className="App">{renderPage()}</div>;
}
