const { exportAllDeclaration } = require('@babel/types')
const familyTree = require('./family-tree')
console.log('NODE_ENV', process.env.NODE_ENV)
describe('Family Tree', function(){
    test('I am in my family tree', function(){
        const me = familyTree[0]
        expect(me.name).toEqual('Matthew')
    })
    test('James is also there', function(){
        const James = familyTree[1]
        expect(James.name).toEqual('James')
    })
    test('Chris is there', function(){
        const Chris = familyTree[3]
        expect(Chris.name).toEqual('Chris')
    })
    test('David is there', function(){
        const David = familyTree[2]
        expect(David.name).toEqual('David')
    })
    test('My parents are there', function(){
        count = 0
        for (var parents of familyTree){
            var parent = parents.name
            if (parent == 'Simon')
            // || parent == 'Alison')
            count++

        expect(count).toEqual(2)
        }
    })
})
