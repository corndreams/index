/**
 * 目标1：渲染列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
let num = 10
let count = 1
let tp = document.querySelector('.tp')
let tp2 = document.querySelector('.tp2')
let next = document.querySelector('.next')
let left = document.querySelector('.left')
let page = document.querySelector('.page')
let pages = document.querySelector('.pages')
let start = document.querySelector('.start')
let last = document.querySelector('.last')
let sreach = document.querySelector('.sreach')
let br = document.querySelector('.break')
let sn = document.querySelector('.sn')
let pageT = document.querySelector('.pageT')
let pageTotals = 1
// 1.1 获取数据
function get() {
  // (http://api.corndreams.ink)
  axios({
    url: `http://api.corndreams.ink/admin/users`,
    type: 'get',
  }).then(result => {
    console.log(result.data)
    let list = result.data.data.users
    console.log(list);
    let total = result.data.data.pagination.total
    let pageNum = result.data.data.pagination.pageSize
    pageTotals = parseInt(total / pageNum)
    if (pageTotals < total / pageNum) {
      pageTotals++
    }
    document.querySelector('.pageT').innerHTML = pageTotals
    console.log(list);
    console.log(pageTotals);
    // 1.2 渲染数据
    const htmlStr = list.map((item, index) => {
      if (item.sex == 1) {
        item.sex = '男'
      } else if (item.sex == 0) {
        item.sex = '女'
      }
      return `<tr>
      <td>${item.nickname}</td>
      <td>${item.sex}</td>
      <td>${item.introduce}</td>
      <td>${item.username}</td>
      <td>${item.email}</td>
      <td data-id=${item.id}>
        <span class="del">删除</span>
        <span class="edit">编辑</span>
      </td>
    </tr>`
    }).join('')
    page.value = '1'
    pages.value = pageNum
    document.querySelector('.list').innerHTML = htmlStr
    page.innerHTML = count
    start.addEventListener('click', () => {
      count = 1
      function get() {
        // 1.1 获取数据
        axios({
          url: `http://api.corndreams.ink/admin/users?pageSize=${num}&currentPage=${count}`,
          type: 'get',
        }).then(result => {
          console.log(result)
          const list = result.data.data.users
          console.log(list);
          let total = result.data.data.pagination.total
          let pageNum = result.data.data.pagination.pageSize
          pageTotals = parseInt(total / pageNum)
          if (pageTotals < total / pageNum) {
            pageTotals++
          }
          // 1.2 渲染数据
          const htmlStr = list.map((item, index) => {
            if (item.sex == 1) {
              item.sex = '男'
            } else if (item.sex == 0) {
              item.sex = '女'
            }
            return `<tr>
      <td>${item.nickname}</td>
      <td>${item.sex}</td>
      <td>${item.introduce}</td>
      <td>${item.username}</td>
      <td>${item.email}</td>
      <td data-id=${item.id}>
        <span class="del">删除</span>
        <span class="edit">编辑</span>
      </td>
    </tr>`
          }).join('')
          // console.log(htmlStr)
          document.querySelector('.list').innerHTML = htmlStr
          page.value = '1'
          // page.innerHTML = count
        })
      }
      get()
    })
    last.addEventListener('click', () => {
      count = pageTotals
      console.log(pageTotals);
      function get() {
        // 1.1 获取数据
        axios({
          url: `http://api.corndreams.ink/admin/users?pageSize=${num}&currentPage=${count}`,
          type: 'get',
        }).then(result => {
          console.log(result)
          const list = result.data.data.users
          console.log(list);
          let total = result.data.data.pagination.total
          let pageNum = result.data.data.pagination.pageSize
          pageTotals = parseInt(total / pageNum)
          if (pageTotals < total / pageNum) {
            pageTotals++
          }
          // 1.2 渲染数据
          const htmlStr = list.map((item, index) => {
            if (item.sex == 1) {
              item.sex = '男'
            } else if (item.sex == 0) {
              item.sex = '女'
            }
            return `<tr>
      <td>${item.nickname}</td>
      <td>${item.sex}</td>
      <td>${item.introduce}</td>
      <td>${item.username}</td>
      <td>${item.email}</td>
      <td data-id=${item.id}>
        <span class="del">删除</span>
        <span class="edit">编辑</span>
      </td>
    </tr>`
          }).join('')
          // console.log(htmlStr)
          document.querySelector('.list').innerHTML = htmlStr
          page.value = count
          // page.innerHTML = count
        })
      }
      get()
    })
    tp.addEventListener('click', () => {
      count = document.querySelector('.page').value
      console.log(count);
      function get() {
        // 1.1 获取数据
        axios({
          url: `http://api.corndreams.ink/admin/users?pageSize=${num}&currentPage=${count}`,
          type: 'get',
        }).then(result => {
          console.log(result)
          const list = result.data.data.users
          console.log(list);
          let total = result.data.data.pagination.total
          let pageNum = result.data.data.pagination.pageSize
          pageTotals = parseInt(total / pageNum)
          if (pageTotals < total / pageNum) {
            pageTotals++
          }
          // 1.2 渲染数据
          const htmlStr = list.map((item, index) => {
            if (item.sex == 1) {
              item.sex = '男'
            } else if (item.sex == 0) {
              item.sex = '女'
            }
            return `<tr>
      <td>${item.nickname}</td>
      <td>${item.sex}</td>
      <td>${item.introduce}</td>
      <td>${item.username}</td>
      <td>${item.email}</td>
      <td data-id=${item.id}>
        <span class="del">删除</span>
        <span class="edit">编辑</span>
      </td>
    </tr>`
          }).join('')
          // console.log(htmlStr)
          document.querySelector('.list').innerHTML = htmlStr
          // page.value = count
        })
      }
      get()
    })
    next.addEventListener('click', () => {
      if (count < pageTotals) {
        count++
        console.log(count);
        console.log(pageTotals);
      } else {
        alert('已经到尾页啦')
      }
      function get() {
        // 1.1 获取数据
        axios({
          url: `http://api.corndreams.ink/admin/users?pageSize=${num}&currentPage=${count}`,
          type: 'get',
        }).then(result => {
          console.log(result)
          const list = result.data.data.users
          console.log(list);
          let total = result.data.data.pagination.total
          let pageNum = result.data.data.pagination.pageSize
          pageTotals = parseInt(total / pageNum)
          if (pageTotals < total / pageNum) {
            pageTotals++
          }
          // 1.2 渲染数据
          const htmlStr = list.map((item, index) => {
            if (item.sex == 1) {
              item.sex = '男'
            } else if (item.sex == 0) {
              item.sex = '女'
            }
            return `<tr>
      <td>${item.nickname}</td>
      <td>${item.sex}</td>
      <td>${item.introduce}</td>
      <td>${item.username}</td>
      <td>${item.email}</td>
      <td data-id=${item.id}>
        <span class="del">删除</span>
        <span class="edit">编辑</span>
      </td>
    </tr>`
          }).join('')
          // console.log(htmlStr)
          document.querySelector('.list').innerHTML = htmlStr
          page.value = count
        })
      }
      get()
    })
    left.addEventListener('click', () => {
      if (count >= 2) {
        count--
      } else {
        alert('已经到首页啦')
      }
      console.log(count);
      function get() {
        // 1.1 获取数据
        axios({
          url: `http://api.corndreams.ink/admin/users?pageSize=${num}&currentPage=${count}`,
          type: 'get',
        }).then(result => {
          console.log(result)
          const list = result.data.data.users
          console.log(list);
          let total = result.data.data.pagination.total
          let pageNum = result.data.data.pagination.pageSize
          pageTotals = parseInt(total / pageNum)
          if (pageTotals < total / pageNum) {
            pageTotals++
          }
          // 1.2 渲染数据
          const htmlStr = list.map((item, index) => {
            if (item.sex == 1) {
              item.sex = '男'
            } else if (item.sex == 0) {
              item.sex = '女'
            }
            return `<tr>
      <td>${item.nickname}</td>
      <td>${item.sex}</td>
      <td>${item.introduce}</td>
      <td>${item.username}</td>
      <td>${item.email}</td>
      <td data-id=${item.id}>
        <span class="del">删除</span>
        <span class="edit">编辑</span>
      </td>
    </tr>`
          }).join('')
          // console.log(htmlStr)
          document.querySelector('.list').innerHTML = htmlStr
          page.value = count
        })
      }
      get()
    })
    tp2.addEventListener('click', () => {
      num = document.querySelector('.pages').value
      count = 1
      console.log(num);
      function get() {
        // 1.1 获取数据
        axios({
          url: `http://api.corndreams.ink/admin/users?pageSize=${num}&currentPage=${count}`,
          type: 'get',
        }).then(result => {
          console.log(result)
          const list = result.data.data.users
          console.log(list);
          let total = result.data.data.pagination.total
          let pageNum = result.data.data.pagination.pageSize
          pageTotals = parseInt(total / pageNum)
          if (pageTotals < total / pageNum) {
            pageTotals++
          }
          console.log(pageTotals);
          document.querySelector('.pageT').innerHTML = pageTotals
          console.log(list);
          // 1.2 渲染数据
          const htmlStr = list.map((item, index) => {
            if (item.sex == 1) {
              item.sex = '男'
            } else if (item.sex == 0) {
              item.sex = '女'
            }
            return `<tr>
      <td>${item.nickname}</td>
      <td>${item.sex}</td>
      <td>${item.introduce}</td>
      <td>${item.username}</td>
      <td>${item.email}</td>
      <td data-id=${item.id}>
        <span class="del">删除</span>
        <span class="edit">编辑</span>
      </td>
    </tr>`
          }).join('')
          // console.log(htmlStr)
          document.querySelector('.list').innerHTML = htmlStr
          page.value = '1'
          // page.innerHTML = count
        })
      }
      get()
    })
    sreach.addEventListener('click', () => {
      br.style.display = 'block'
      nam = document.querySelector('.sn').value
      count = 1
      num = 10
      console.log(nam);
      // const reg = /^[0-9]$/
      function get() {
        // 1.1 获取数据
        // axios({
        //   url: `http://api.corndreams.ink/admin/users/searchNum/?username=${nam}pageSize=${num}&currentPage=${count}`,
        //   type: 'get',
        // }).then(result => {
        //   console.log(result)
        //   const list = result.data.data.users
        //   console.log(list);
        //   let total = result.data.data.pagination.total
        //   let pageNum = result.data.data.pagination.pageSize
        //   pageTotals = parseInt(total / pageNum)
        //   document.querySelector('.pageT').innerHTML = pageTotals
        // 1.2 渲染数据
        axios({
          url: `http://api.corndreams.ink/admin/users/searchNum/${nam}`,
          type: 'get',
        }).then(res => {
          const list = res.data.data.users
          console.log(list);
          console.log(res.data.data);
          let total = res.data.data.pagination.total
          let pageNum = res.data.data.pagination.pageSize
          pageTotals = parseInt(total / pageNum)
          if (pageTotals < total / pageNum) {
            pageTotals++
          }
          document.querySelector('.pageT').innerHTML = pageTotals

          const htmlStr = list.map((item, index) => {
            if (item.sex == 1) {
              item.sex = '男'
            } else if (item.sex == 0) {
              item.sex = '女'
            }
            return `
            <tr>
        <td>${item.nickname}</td>
        <td>${item.sex}</td>
        <td>${item.introduce}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>
        <td data-id=${item.id}>
          <span class="del">删除</span>
          <span class="edit">编辑</span>
        </td>
      </tr>`
          }).join('')
          console.log(htmlStr)
          document.querySelector('.list').innerHTML = htmlStr
          page.value = '1'
          pages.value = '10'
          if (res.data.data.pagination.total == 0) {
            axios({
              url: `http://api.corndreams.ink/admin/users/searchName/${nam}`,
              type: 'get',
            }).then(res => {
              const list = res.data.data.users
              console.log(list);
              console.log(res.data.data);
              let total = res.data.data.pagination.total
              let pageNum = res.data.data.pagination.pageSize
              pageTotals = parseInt(total / pageNum)
              if (pageTotals < total / pageNum) {
                pageTotals++
              }
              document.querySelector('.pageT').innerHTML = pageTotals

              const htmlStr = list.map((item, index) => {
                if (item.sex == 1) {
                  item.sex = '男'
                } else if (item.sex == 0) {
                  item.sex = '女'
                }
                return `
            <tr>
        <td>${item.nickname}</td>
        <td>${item.sex}</td>
        <td>${item.introduce}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>
        <td data-id=${item.id}>
          <span class="del">删除</span>
          <span class="edit">编辑</span>
        </td>
      </tr>`
              }).join('')
              console.log(htmlStr)
              document.querySelector('.list').innerHTML = htmlStr
              page.value = '1'
              pages.value = '10'
            })
          }
        })

        // })

      }
      get()
    })
    br.addEventListener('click', () => {
      br.style.display = 'none'
      count = 1
      function get() {
        // 1.1 获取数据
        axios({
          url: `http://api.corndreams.ink/admin/users?pageSize=${num}&currentPage=${count}`,
          type: 'get',
        }).then(result => {
          console.log(result)
          const list = result.data.data.users
          console.log(list);
          let total = result.data.data.pagination.total
          let pageNum = result.data.data.pagination.pageSize
          pageTotals = parseInt(total / pageNum)
          if (pageTotals < total / pageNum) {
            pageTotals++
          }
          document.querySelector('.pageT').innerHTML = pageTotals
          // 1.2 渲染数据
          const htmlStr = list.map((item, index) => {
            if (item.sex == 1) {
              item.sex = '男'
            } else if (item.sex == 0) {
              item.sex = '女'
            }
            return `<tr>
      <td>${item.nickname}</td>
      <td>${item.sex}</td>
      <td>${item.introduce}</td>
      <td>${item.username}</td>
      <td>${item.email}</td>
      <td data-id=${item.id}>
        <span class="del">删除</span>
        <span class="edit">编辑</span>
      </td>
    </tr>`
          }).join('')
          // console.log(htmlStr)
          document.querySelector('.list').innerHTML = htmlStr
          page.value = '1'
          sn.value = ''
          // page.innerHTML = count
        })
      }
      get()

    })

  })
}
get()


/**
 * 目标2：新增
 *  2.1 新增弹框->显示和隐藏
 *  2.2 收集表单数据，并提交到服务器保存
 *  2.3 刷新列表
 */
// 2.1 创建弹框对象
const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom)
// 保存按钮->点击->隐藏弹框
// document.querySelector('.add-btn').addEventListener('click', () => {
//   // 2.2 收集表单数据，并提交到服务器保存
//   const addForm = document.querySelector('.add-form')
//   const bookObj = serialize(addForm, { hash: true, empty: true })
// console.log(bookObj)
// 提交到服务器
//   axios({
//     url: 'http://hmajax.itheima.net/api/books',
//     method: 'POST',
//     data: {
//       ...bookObj,
//       creator
//     }
//   }).then(result => {
//     // console.log(result)
//     // 2.3 添加成功后，重新请求并渲染列表
//     get()
//     // 重置表单
//     addForm.reset()
//     // 隐藏弹框
//     addModal.hide()
//   })





// })<td>${index + 1}</td>


// 4.1 编辑弹框->显示和隐藏
const editDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editDom)
// 编辑元素->点击->弹框显示
document.querySelector('.list').addEventListener('click', e => {
  // 判断点击的是否为编辑元素
  if (e.target.classList.contains('edit')) {
    editModal.show()
  }
})
// 修改按钮->点击->隐藏弹框
document.querySelector('.edit-btn').addEventListener('click', () => {
  // 隐藏弹框
  editModal.hide()
})
