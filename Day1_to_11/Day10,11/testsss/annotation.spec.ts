// ! annotations
//  we are adding some

import{test} from "@playwright/test"
import { log } from "node:console"
/**
 * skip
 * only
 * fixme
 * fai
 * describe
 * slow
 * settimeout
 */


test("test1",async()=>{
 console.log("Test1");
}
)

test("test2",async()=>{
console.log("Test2");
}
)



test.skip("test3",async()=>{
console.log("Test3");
}
)


// test.only("test4",async()=>{
// console.log("Test4");
// }
// )


test.fixme("test4",async()=>{
console.log("Test4");
}
)


test("test5",async()=>{
    test.slow()
console.log("Test4");
}
)


test.describe("test6",async()=>{
    console.log("test6")
    test(" ",({page})=>{

    })

}
)

test("test7",async()=>{
console.log("Test7");
}
)






