


function lectureAfterTheBreak() {
  return new Promise((resolve, reject) => {
    try {
      resolve(teacher.Lecture())
    } catch (e){
      reject(e)
    }
  })
}

async function asynclectureAfterTheBreak() {
  return teacher.lecture()
}


lectureAfterTheBreak()
  .then((lecture) => {
    listenTo(lecture)
      .then((lecture) => {
         /* someCode */
      })
      .catch((error)=>{})
  })
  .catch((error) => { goHome() })

console.log('having a break')


try {
  const lecture = await lectureAfterTheBreak()
  listenTo(lecture)
} catch (e) {
  console.log('Teacher crashed... go home!!')
  goHome()
}

async function useAwait() {
  await asynclectureAfterTheBreak()
}