import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Course from './Course'


 const Courses = () => {
    return (
        <div>
            <Query query={gql`
               { courses {
                    id
                    title
                    author
                    description
                    topic
                    url
                }}
            `} >
                { ({ loading, err, data }) => {
                    if(loading) return <p>Loading ...</p>
                    if(err) return <p>Error: {err}</p>
                    
                    if(data){
                      return  data.courses.map((course) => (
                          <Course course={course}/>
                            
                        ))
                    } 
                }}

            </Query>
        </div>
    )
}

export default Courses