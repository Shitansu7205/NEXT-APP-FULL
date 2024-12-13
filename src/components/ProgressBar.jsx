const ProgressBar = ({ progress }) => {
    return (
      <div style={{ width: '100%', backgroundColor: '#e0e0df', borderRadius: '5px' }}>
        <div
          style={{
            height: '10px',
            width: `${progress}%`,
            backgroundColor: '#3b5998',
            borderRadius: '5px',
          }}
        />
      </div>
    );
  };
  
  export default ProgressBar;
  