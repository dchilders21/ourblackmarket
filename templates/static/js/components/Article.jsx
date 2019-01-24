import React, { Component } from 'react';
import axios from 'axios';
import BlockContent from '@sanity/block-content-to-react'

export default class Article extends Component {
   constructor(props){
      super(props)
      this.state = {
        content: {
          page: []
        },
      }
    }
   componentDidMount() {
      console.log('component did mount ');
      axios.get(`/api/article/`)
        .then(result => {
           console.log(result.data);
           this.setState({content: result.data})
        })
    }
    render() {
      const content = this.state.content;
      const serializers = {
         types: {
           code: props => (
             <pre data-language={props.node.language}>
               <code>{props.node.code}</code>
             </pre>
           )
         }
       }
       return (
          <div>
          <h1>Article</h1>
          <BlockContent blocks={content.page} serializers={serializers} />
          </div>
       )
    }
}