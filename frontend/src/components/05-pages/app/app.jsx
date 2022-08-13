import Form from "components/02-molecules/form/form";
import BdayList from "components/03-organisms/bday-list/bday-list";
import { useState } from "react";

const App = () => {
  
  const [bdays, setBdays] = useState([]);
  const [loading, setLoading] = useState(false);
  
  return (
    <div className={`app app--form-focus`}>
      <BdayList className="app__bday-list" bdaysState={[ bdays, setBdays ]} loadingState={[ loading, setLoading ]} />
      <Form className="app__form" loadingState={[ loading, setLoading ]}/>
    </div>
  );
}

export default App;
