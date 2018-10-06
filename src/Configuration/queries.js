import gql from "graphql-tag";

const GET_SCHOOLS = gql`
    query schools($country:String!, $city:String, $courseTitle:String){
        findSchool(country:$country, city:$city){
            _id
            name
            country
            city
            optionals {
            icon
            description
            }
            courses {
            title
            }
            photos
        }
`;

const GET_FILTERS = gql`
    query filters{
        getCountries{
            name
            acronym
        }
        getLanguages{
            name
            _id
        }
        getCourseTypes{
            name
            _id
        }
        findSchool{
            name
            _id
        }
        getIntensity{
            title
            _id
        }
        getShifts{
            title
            _id
        }
    }
`

export {GET_SCHOOLS}