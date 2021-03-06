'use strict';

var _             = require('lodash');
var React         = require('react');
var Sidebar       = require('./components/sidebar');
var Grid          = require('./components/grid');
var FluxComponent = require('./flux/flux-component');

require('!file-loader?name=[path][name].[ext]!../images/favicon.ico');
require('./css/app');

class DecisiveApplication extends React.Component
{
    render()
    {
        return (
            <div className='container'>
                <Sidebar grids={this.props.grids} />
                <main className='content'>
                    <div className='content__top-gutter'>
                        <div className='top-gutter__corner'></div>
                        <div className='top-gutter__main'>
                            <div className='top-gutter__header top-gutter__header--blue priority-label'>Urgent</div>
                            <div className='top-gutter__header priority-label'>Not Urgent</div>
                        </div>
                    </div>
                    <div className='content__under-top-gutter'>
                        <div className='left-gutter'>
                            <div className='left-gutter__header left-gutter__header--blue'>
                                <span className='left-gutter__header__text left-gutter__header__text--top priority-label'>Important</span>
                            </div>
                            <div className='left-gutter__header'>
                                <span className='left-gutter__header__text left-gutter__header__text--bottom priority-label'>Not Important</span>
                            </div>
                        </div>
                        <Grid tasks={this.props.tasks} id={this.props.selectedGrid} />
                    </div>
                </main>
            </div>
        );
    }
}

export default FluxComponent(DecisiveApplication, ['grid'], flux => ({
    grids        : flux.store('grid').getAll(),
    selectedGrid : flux.store('grid').getSelectedGrid(),
    tasks        : flux.store('grid').getTasksForSelectedGrid()
}));
