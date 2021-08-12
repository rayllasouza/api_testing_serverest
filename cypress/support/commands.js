
import Ajv from 'ajv'
const ajv = new Ajv({allErrors: true, verbose: true, strict: false})

Cypress.Commands.add('contractValidation', (res, schema, status) => {
    cy.log("--> REALIZANDO TESTE DE CONTRATO <--")
    cy.fixture(`schema/${schema}/${status}.json`).then(schema => {
        const validate = ajv.compile(schema)
        const valid = validate(res.body)
        if(!valid){
            var errors = ''
            for (let each in validate.errors){
                let err = validate.errors[each]
                errors += `\n${err.instancePath} ${err.message}, but receive ${typeof err.data}`
            }
            throw new Error('Contract validation error, please verify!' + errors)
            Cypress.runner.stop()
        }
        return true
    })
})