'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const About = require('./about');
const Projects = require('./projects');
const Work = require('./work');
const Education = require('./education');
const Skills = require('./skills');
const Portfolio = require('./portfolio');
const References = require('./references');
const Footer = require('./footer');

const Section = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics,
        projects: ResumePropTypes.projects,
        work: ResumePropTypes.workSet,
        education: ResumePropTypes.educationSet,
        skills: ResumePropTypes.skillsSet,
        languages: ResumePropTypes.languagesSet,
        portfolio: ResumePropTypes.publicationsSet,
        references: ResumePropTypes.referencesSet
    },

    render: function () {
        const skillsContent = {
            skills: this.props.skills,
            languages: this.props.languages
        };

        return (
            <div>
                <About content={this.props.basics}/>
                <Skills content={skillsContent} />
                <Projects content={this.props.projects} />
                <Work content={this.props.work} />
                <Education content={this.props.education}/>
                {/* <Portfolio content={this.props.portfolio} /> */}
                {/* <References content={this.props.references}/> */}
                <Footer content={this.props.basics}/>
            </div>
        );
    }
});

module.exports = Section;
