// import React from 'react';
//
// const EmployeeDurationList = ({employees, durations}) => {
//
//     return (
//         <>
//         <div>{employees.map(employee =>
//             <h1 style={{textAlign: "center"}}>Сотрудник: {employee.name}</h1>
//                 <TransitionGroup>
//                     {durations.map(duration =>
//                         <CSSTransition
//                         key={duration._links.self.href}
//                         timeout={500}
//                         classNames="task"
//                         >
//                         <DurationList durations={durations}/>
//                         </CSSTransition>
//                         )}
//                 </TransitionGroup>
//             )}
//         </div>
//         </>
//     );
// };
//
// export default EmployeeDurationList;