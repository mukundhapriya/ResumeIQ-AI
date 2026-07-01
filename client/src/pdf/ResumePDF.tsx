import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

import type {
  Achievement,
  Certification,
  Education,
  Experience,
  PersonalInfo,
  Project,
  Skill,
} from "../types/resume";

interface Props {
  title: string;
  personalInfo: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
    color: "#111827",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
    paddingBottom: 3,
  },

  text: {
    fontSize: 11,
    marginBottom: 3,
    lineHeight: 1.5,
  },

  section: {
    marginBottom: 12,
  },

  item: {
    marginBottom: 8,
  },

  bold: {
    fontWeight: "bold",
  },
});

const ResumePDF = ({
  title,
  personalInfo,
  summary,
  education,
  experience,
  skills,
  projects,
  certifications,
  achievements,
}: Props) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Personal Information */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            Personal Information
          </Text>

          <Text style={styles.text}>
            {personalInfo.fullName}
          </Text>

          <Text style={styles.text}>
            {personalInfo.email}
          </Text>

          <Text style={styles.text}>
            {personalInfo.phone}
          </Text>

          <Text style={styles.text}>
            {personalInfo.location}
          </Text>

          {personalInfo.linkedin && (
            <Text style={styles.text}>
              {personalInfo.linkedin}
            </Text>
          )}

          {personalInfo.github && (
            <Text style={styles.text}>
              {personalInfo.github}
            </Text>
          )}

          {personalInfo.portfolio && (
            <Text style={styles.text}>
              {personalInfo.portfolio}
            </Text>
          )}
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            Professional Summary
          </Text>

          <Text style={styles.text}>
            {summary}
          </Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            Education
          </Text>

          {education.map((edu) => (
            <View
              key={edu.id}
              style={styles.item}
            >
              <Text style={styles.bold}>
                {edu.degree}
              </Text>

              <Text style={styles.text}>
                {edu.institution}
              </Text>

              <Text style={styles.text}>
                {edu.fieldOfStudy}
              </Text>

              <Text style={styles.text}>
                {edu.startDate} - {edu.endDate}
              </Text>

              {edu.cgpa && (
                <Text style={styles.text}>
                  CGPA: {edu.cgpa}
                </Text>
              )}
            </View>
          ))}
        </View>

        {/* ===== Continue with Part 2 from here ===== */}
                {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>

          {experience.map((exp) => (
            <View key={exp.id} style={styles.item}>
              <Text style={styles.bold}>
                {exp.jobTitle}
              </Text>

              <Text style={styles.text}>
                {exp.company}
              </Text>

              <Text style={styles.text}>
                {exp.startDate} - {exp.endDate}
              </Text>

              {exp.description && (
                <Text style={styles.text}>
                  {exp.description}
                </Text>
              )}
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.heading}>Projects</Text>

          {projects.map((project) => (
            <View key={project.id} style={styles.item}>
              <Text style={styles.bold}>
                {project.title}
              </Text>

              <Text style={styles.text}>
                {project.description}
              </Text>

              {project.technologies.length > 0 && (
                <Text style={styles.text}>
                  Technologies:{" "}
                  {project.technologies
                    .map((tech) => tech.name)
                    .join(", ")}
                </Text>
              )}

              {project.github && (
                <Text style={styles.text}>
                  GitHub: {project.github}
                </Text>
              )}

              {project.liveDemo && (
                <Text style={styles.text}>
                  Live Demo: {project.liveDemo}
                </Text>
              )}
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>

          <Text style={styles.text}>
            {skills.map((skill) => skill.name).join(", ")}
          </Text>
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            Certifications
          </Text>

          {certifications.map((cert) => (
            <View key={cert.id} style={styles.item}>
              <Text style={styles.bold}>
                {cert.name}
              </Text>

              <Text style={styles.text}>
                {cert.issuer}
              </Text>

              {cert.issueDate && (
                <Text style={styles.text}>
                  Issued: {cert.issueDate}
                </Text>
              )}

              {cert.credentialId && (
                <Text style={styles.text}>
                  Credential ID: {cert.credentialId}
                </Text>
              )}
            </View>
          ))}
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.heading}>
            Achievements
          </Text>

          {achievements.map((achievement) => (
            <View
              key={achievement.id}
              style={styles.item}
            >
              <Text style={styles.bold}>
                {achievement.title}
              </Text>

              {achievement.organization && (
                <Text style={styles.text}>
                  {achievement.organization}
                </Text>
              )}

              {achievement.date && (
                <Text style={styles.text}>
                  {achievement.date}
                </Text>
              )}

              {achievement.description && (
                <Text style={styles.text}>
                  {achievement.description}
                </Text>
              )}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;