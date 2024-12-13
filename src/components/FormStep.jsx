const FormStep = ({ step, onChange, formData }) => {
    switch (step) {
      case 1:
        return (
          <>
            <input
              type="text"
              placeholder="Field 1"
              value={formData.field1}
              onChange={(e) => onChange({ field1: e.target.value })}
            />
            <input
              type="text"
              placeholder="Field 2"
              value={formData.field2}
              onChange={(e) => onChange({ field2: e.target.value })}
            />
          </>
        );
      case 2:
        return (
          <>
            <input
              type="text"
              placeholder="Field 3"
              value={formData.field3}
              onChange={(e) => onChange({ field3: e.target.value })}
            />
            <input
              type="text"
              placeholder="Field 4"
              value={formData.field4}
              onChange={(e) => onChange({ field4: e.target.value })}
            />
          </>
        );
      case 3:
        return (
          <>
            <input
              type="text"
              placeholder="Field 5"
              value={formData.field5}
              onChange={(e) => onChange({ field5: e.target.value })}
            />
            <input
              type="text"
              placeholder="Field 6"
              value={formData.field6}
              onChange={(e) => onChange({ field6: e.target.value })}
            />
          </>
        );
      default:
        return null;
    }
  };
  
  export default FormStep;
  