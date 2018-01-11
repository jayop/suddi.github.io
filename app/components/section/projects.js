'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const ResumePropTypes = require('../../prop_types/resume');
const BulletPoints = require('../bullet_points');
const Datetime = require('../../utils/datetime');

const Entry = React.createClass({
    propTypes: {
        index: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        entry: ResumePropTypes.projects
    },

    render: function () {
        const releaseDate = Datetime.getDisplayFromDate(this.props.entry.releaseDate);
        // const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate);
        console.log('releaseDate', this.props.entry.releaseDate)
        const index = this.props.index + 1;
        const divider = index === this.props.total ? (<br/>) : (<hr/>);

        return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>
                        <a href={this.props.entry.website}>{this.props.entry.name}</a>
                    </h3>
                    <p className='info'>
                        <span className='info-summary'>{this.props.entry.summary}</span>
                        <span> &bull; </span>
                        <em className='date'>{this.props.entry.endDate}</em>
                        {/* <div className='info-summary'>{this.props.entry.summary}</div> */}
                        {/* <span> &bull; </span>
                        {this.props.entry.summary}
                        {/* <span> &bull; </span> */}
                        {/* <span className='info-summary'>{this.props.entry.summary}</span> */}
                        {/* <span> &bull; </span> */}
                        {/* <em className='date'>{this.props.entry.startDate} - {this.props.entry.endDate}</em> */}
                    </p>
                    {/* {this.props.entry.summary} */}
                    <BulletPoints points={this.props.entry.keywords}/>
                </div>
                {divider}
            </div>
        );
    }
});

const Projects = React.createClass({
    propTypes: {
        content: ResumePropTypes.projectSet
    },

    render: function () {
        const numEntries = this.props.content.length;
        return (
            <section id='projects'>
                <div className='row projects'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Projects</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {this.props.content.map(function (entry, index) {
                            return (
                                <Entry key={index} index={index} total={numEntries} entry={entry}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Projects;
