import gql from "graphql-tag";

const GET_SCHOOLS = gql`
    query schools($country:String!, $city:String){
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
                _id
                title
            }
            photos
        }
    }
`;

const GET_SCHOOL_INFO = gql`
    query school_info($_id:ID!){
        getSchoolInfo(id:$_id){
            courses{
                title
                _id
                intensities{
                title
                _id
                    shifts{
                        title
                        duration{
                            numberOfWeeks
                            price
                        }
                        _id
                    }
                }
            }
        }
    }
`

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

export {GET_SCHOOLS, GET_SCHOOL_INFO}