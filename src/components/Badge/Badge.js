import React, { Component } from 'react'

//creating a badge (jsx template for stars and issues)
export default class Badge extends Component {
    render() {
        const {
            type,
            label,
            count
        } = this.props

        return (
            <span class={"mr-1 badge badge-" + type}> {label} <span class="badge badge-light">{count}</span></span>
        )
    }
}
