import React from 'react'
import { useQuery, gql } from '@apollo/client';
import '../assets/style/User.css'

const SEARCH_GIT_REPOSITORIES = gql`
query searchRepositories($queryString: String!, $direction: String!){
	search(query:$queryString, type:USER, first: 10) {
        pageInfo {
            endCursor
            startCursor
        }
		edges {
			node {
				 ... on User{
					id
					name
                    avatarUrl
                    url
                    email
                    repositories(first: 10, orderBy: {field: NAME, direction: $direction}) {
                        edges {
                            node {
                                ... on Repository {
                                    id
                                    name
                                    description
                                    url
                                }
                            }
                        }
                    }
				}
			}
		}
	}
}
`;


const Test = (props) => {

    const { loading, error, data } = useQuery(SEARCH_GIT_REPOSITORIES, {variables: {queryString: props.query, direction: props.direction}});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data?
    <div className="user-container">
        {data.search.edges.map((edge) => 
        <div className="user-list-container" key={edge.node.url}>
            <img src={edge.node.avatarUrl} alt="user profile" />

            <div className="user-info">
                <p className="user-header">User information</p>
                <p className="user-name">{edge.node.name}</p>
                <a href={edge.node.url}>{edge.node.url}</a>
                <p className="user-email">{edge.node.email}</p>
            </div>

            <div className="user-repositories">
                <div className="repository-text-buton">
                    <p className="user-header">Repositories:</p>
                    <button onClick={props.sortNames}>Click here to sort</button>
                </div>
            {edge.node.repositories?.edges.map((i) =>
                <div className="repository-list" key={i.node.id}>
                    <p className="rep-name">{i.node.name}</p>
                    <a className="rep-url" href={i.node.url}>{i.node.url}</a>
                    <p className="rep-desc">{i.node.description}</p>
            </div>)}
            </div>

        </div>)}

    </div>
    : <h1>No data to show</h1>
    

}

export default Test;
