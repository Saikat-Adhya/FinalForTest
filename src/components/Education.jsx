import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    date: "2020 - 2024",
    title: "Bachelor's Degree",
    institution: "Your University",
    description: "Computer Science and Engineering"
  },
  {
    date: "2018 - 2020",
    title: "Higher Secondary",
    institution: "Your School",
    description: "Science Stream"
  },
  {
    date: "2018",
    title: "Secondary Education",
    institution: "Your School",
    description: "CBSE Board"
  }
];

const Education = () => {
  return (
    <section className="py-20 px-6 sm:px-8">
      <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
      <VerticalTimeline>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            date={item.date}
            iconStyle={{ background: '#915eff', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <h4 className="text-lg text-[#915eff]">{item.institution}</h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;