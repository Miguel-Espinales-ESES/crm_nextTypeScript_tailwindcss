import isArray from 'lodash/isArray'

const HandleError = (graphQLErrors: any) => {
  if (isArray(graphQLErrors.graphQLErrors)) {
    if (graphQLErrors.graphQLErrors.length) {
      return graphQLErrors.graphQLErrors[0].message
    }

    console.log(JSON.stringify(graphQLErrors, null, 2))
    return 'Ha ocurrido un ocurrido un error al procesar su información, por favor inténtelo más tarde '
  }
  console.log(JSON.stringify(graphQLErrors, null, 2))
  return 'Ha ocurrido un ocurrido un error al procesar su información, por favor inténtelo más tarde '
}

export default HandleError