 
import MainDash from '../../Pages/Dashbaord/MainDash/MainDash';
import RightSide from '../../Pages/Dashbaord/RigtSide/RightSide';
 

function Dashboard() {
   
  return (
   <>
  <div className="RightSide">
      <div>
        <h3> </h3>
        <MainDash/>
      </div>
      <div>
        <h3> </h3>
        <RightSide/>
      </div>
    </div>
        
       
   </>
  );
}

 
export default Dashboard;
