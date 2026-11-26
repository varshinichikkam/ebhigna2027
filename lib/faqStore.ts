export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'What is Ebhigna 2027 and who can participate?',
    answer:
      'Ebhigna 2027 is the flagship technical symposium hosted by the Department of CSE (Artificial Intelligence) at Pragati University under Strides 2K27. Undergraduate and postgraduate students from any recognized college or university with an interest in AI, coding, and innovation can participate.',
  },
  {
    id: 2,
    question: 'When and in what mode will the events be conducted?',
    answer:
      'All Ebhigna 2027 events will be held on 8th and 9th January 2027 in online mode, allowing participants from across the country to compete conveniently from anywhere.',
  },
  {
    id: 3,
    question: 'How do I register for an event?',
    answer:
      'Select any event from the Events section and click the Register Now button to open the official registration portal in a new tab. Complete the form with your academic details and choose the events you wish to join.',
  },
  {
    id: 4,
    question: 'Can I participate in more than one event?',
    answer:
      'Yes, participants are welcome to register for multiple events across Clue Fusion, BUG2GOLD, Prompt to Profit, and APEX AI: The Machine Mind Gallery, provided the round timings do not overlap.',
  },
  {
    id: 5,
    question: 'Will participants receive certificates and prizes?',
    answer:
      'Yes, all verified participants will receive e-certificates of participation, and top performers in each event will be awarded merit certificates along with exciting cash awards.',
  },
];
