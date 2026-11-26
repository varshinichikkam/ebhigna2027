export interface FacultyCoordinator {
  name: string;
  image: string;
  designation: string;
  dept: string;
}

export interface StudentCoordinator {
  name: string;
  image: string;
  roll_no: string;
}

export interface Event {
  id: number;
  event_title: string;
  cover_image: string;
  sub_heading: string;
  description: string;
  registration_link: string;
  guidelines: string[];
  event_faculty_coordinator: FacultyCoordinator[];
  event_student_coordinators: StudentCoordinator[];
}

export const events: Event[] = [
  {
    id: 1,
    event_title: 'CLUE FUSION',
    cover_image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    sub_heading: 'Four Clues. One Connection.',
    description:
      'Clue Fusion is a fun and brain-teasing game where participants are given four related words or clues and must identify the single concept that connects all of them. The challenge is to think logically, recognize patterns, and find the common theme.\n\nExample: Neural Network • Recurrent Network • Layers • Connections → Deep Learning',
    registration_link: 'https://www.pragati.ac.in/strides2k27/',

    guidelines: [
      'Participants must identify the common concept connecting four given clues.',
      'Each question consists of four related words or hints.',
      'Think logically and identify the hidden connection.',
      'Participants must answer within the given time limit.',
      'Each correct answer earns points.',
      'The participant with the highest score will be declared the winner.',
    ],

    event_faculty_coordinator: [
      {
        name: 'Dr. Faculty Name',
        image:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
        designation: 'Associate Professor',
        dept: 'Department of CSE (AI)',
      },
    ],

    event_student_coordinators: [
      {
        name: 'Student Coordinator 1',
        image:
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        roll_no: '24A51A0501',
      },
      {
        name: 'Student Coordinator 2',
        image:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        roll_no: '24A51A0502',
      },
    ],
  },

  {
    id: 2,
    event_title: 'BUG2GOLD',
    cover_image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    sub_heading: 'Debug Your Way to Glory',
    description:
      'BUG2GOLD is a coding challenge event where participants test their programming skills, logical thinking, debugging ability, and problem-solving speed through three exciting rounds. From finding errors to solving hidden problems and recreating code from outputs, participants must prove their coding skills to reach the gold!',
    registration_link: 'https://www.pragati.ac.in/strides2k27/',

    guidelines: [
      'Participants must compete in three challenging rounds.',
      'Round 1 – ERRATIX: Identify and correct errors in the given buggy code.',
      'Round 2 – Code Clash: Uncover hidden programming problems and solve them.',
      'Round 3 – Reverse Coding: Recreate the code using the given output.',
      'Participants must follow the specified programming language requirements.',
      'Correctness, logic, accuracy, and completion time will be considered.',
      'Participants must complete each round within the given time limit.',
    ],

    event_faculty_coordinator: [
      {
        name: 'Dr. Faculty Name',
        image:
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
        designation: 'Assistant Professor',
        dept: 'Department of CSE (AI)',
      },
    ],

    event_student_coordinators: [
      {
        name: 'Student Coordinator 3',
        image:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        roll_no: '24A51A0503',
      },
      {
        name: 'Student Coordinator 4',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
        roll_no: '24A51A0504',
      },
    ],
  },

  {
    id: 3,
    event_title: 'PROMPT TO PROFIT',
    cover_image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    sub_heading: 'Turn Waste into Worth with AI!',
    description:
      'Prompt to Profit is an online event where participants receive a waste item and use AI tools to transform it into a useful, innovative, or valuable product. They showcase their idea and explain how AI helped them reinvent the waste.\n\nExample: A plastic bottle → AI-generated idea of a self-watering plant pot.',
    registration_link: 'https://www.pragati.ac.in/strides2k27/',

    guidelines: [
      'The event will be conducted in online mode.',
      'Participants will receive a waste item or waste material as a challenge.',
      'Use AI tools to generate an innovative product idea.',
      'The proposed solution must demonstrate creativity and practical usefulness.',
      'Participants must showcase their idea with AI-generated visuals or a presentation.',
      'Explain how AI contributed to transforming the waste material.',
      'Originality, innovation, sustainability, and presentation will be evaluated.',
    ],

    event_faculty_coordinator: [
      {
        name: 'Dr. Faculty Name',
        image:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
        designation: 'Associate Professor',
        dept: 'Department of CSE (AI)',
      },
    ],

    event_student_coordinators: [
      {
        name: 'Student Coordinator 5',
        image:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        roll_no: '24A51A0505',
      },
      {
        name: 'Student Coordinator 6',
        image:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        roll_no: '24A51A0506',
      },
    ],
  },

  {
    id: 4,
    event_title: 'APEX AI: THE MACHINE MIND GALLERY',
    cover_image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    sub_heading: 'Where Intelligence Meets Innovation.',
    description:
      'APEX AI: The Machine Mind Gallery is a project expo showcasing innovative AI-based projects. Participants present their intelligent solutions, demonstrate their models, and explore how AI can solve real-world problems through creativity and technology.',
    registration_link: 'https://www.pragati.ac.in/strides2k27/',

    guidelines: [
      'Participants must present an AI-based project or working prototype.',
      'Projects should demonstrate innovation and real-world applicability.',
      'Participants must explain the problem statement and proposed solution.',
      'A live demonstration of the project should be provided wherever possible.',
      'Participants must explain the technologies, tools, and AI models used.',
      'Projects will be evaluated based on innovation, technical implementation, practical impact, and presentation.',
      'Participants must be prepared to answer questions from evaluators.',
    ],

    event_faculty_coordinator: [
      {
        name: 'Dr. Faculty Name',
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        designation: 'Professor',
        dept: 'Department of CSE (AI)',
      },
    ],

    event_student_coordinators: [
      {
        name: 'Student Coordinator 7',
        image:
          'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        roll_no: '24A51A0507',
      },
      {
        name: 'Student Coordinator 8',
        image:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
        roll_no: '24A51A0508',
      },
    ],
  },
];
