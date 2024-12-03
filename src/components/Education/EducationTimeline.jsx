import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../../constants';
import 'react-vertical-timeline-component/style.min.css';

const EducationTimeline = () => {
  return (
    <VerticalTimeline>
      {education.map((item, index) => (
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
  );
};

export default EducationTimeline;