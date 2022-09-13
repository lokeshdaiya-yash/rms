import { Link } from 'react-router-dom';
import { commonParamForColomn } from "../../utils";
import {
    getCompletedCourseName,
    getOnGoingCourseName,
  } from '../../services/timeline.service';

export const getColomnForRoadMap = [
    {
      Header: <div style={{ height: '30px' }}>EMP_ID</div>,
      accessor: 'empId',
      ...commonParamForColomn(150),
    },
    {
      Header: 'Name',
      accessor: 'firstName',
      ...commonParamForColomn(200, true, true),
      Cell: (cell: any) => {
        const fname = cell.original.firstName
        const designation = cell.original.designation
        const data = {
          username : fname,
          designation : designation
        }
        return <Link to={`/timeline/${cell.original.userId}`} state={data}>{fname}</Link>
      }
    },
    {
      Header: 'Completed Course',
      ...commonParamForColomn(240),
      Cell: (cell: any) => getCompletedCourseName(
        cell?.original?.ratingOfUser[0]?.roadmap
      )
    },
    {
      Header: 'Ongoing Course',
      ...commonParamForColomn(240),
      Cell: (cell: any) => getOnGoingCourseName(cell?.original?.ratingOfUser[0]?.roadmap)
    },
    {
      Header: 'Designation',
      accessor: 'designation',
      ...commonParamForColomn(210, true, true),
    },
  ];