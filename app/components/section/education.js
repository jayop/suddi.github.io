'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const BulletPoints = require('../bullet_points');
const Datetime = require('../../utils/datetime');

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.education
    },

    render: function () {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate);
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate);
        return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>
                        <a href={this.props.entry.website}>{this.props.entry.institution}</a>
                    </h3>
                    <p className='info'>
                        {this.props.entry.area}
                        {/* <span> &bull; </span> */}
                        <span className='info-summary'>{this.props.entry.summary}</span>
                        <span> &bull; </span>
                        {/* <em className='date'>{startDate} - {endDate}</em> */}
                        <em className='date'>{this.props.entry.endDate}</em>
                    </p>
                    <BulletPoints points={this.props.entry.courses} />
                </div>
            </div>
        );
    }
});

const Education = React.createClass({
    propTypes: {
        content: ResumePropTypes.educationSet
    },

    render: function () {
        return (
            <section id='education'>
                <div className='row education'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {this.props.content.map(function (entry, index) {
                            return (
                                <Entry key={index} entry={entry}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Education;
