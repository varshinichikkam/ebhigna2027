export interface HodCoordinator {
  name: string;
  designation: string;
  image: string;
}

export interface FacultyCoordinatorInfo {
  name: string;
  designation: string;
  image: string;
}

export interface StudentCoordinatorInfo {
  name: string;
  roll_no: string;
  mobile: string;
  image: string;
}

export const hodCoordinator: HodCoordinator = {
  name: 'Mrs. K. Lakshmi Viveka',
  designation: 'Associate Professor & Head of the Department, CSE (AI)',
  image:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
};

export const facultyCoordinators: FacultyCoordinatorInfo[] = [
  {
    name: 'Mr. Krishna Chaitanya P',
    designation: 'Assistant Professor · Dept. of CSE (AI)',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Mrs. T. Tejasvi',
    designation: 'Assistant Professor · Dept. of CSE (AI)',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
];

export const studentCoordinators: StudentCoordinatorInfo[] = [
  {
    name: 'Ch. S. Varshini',
    roll_no: '23A51A4301',
    mobile: '7288848831',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'O. Rama Krishna',
    roll_no: '23A51A4302',
    mobile: '1234567890',
    image:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
  },
];
