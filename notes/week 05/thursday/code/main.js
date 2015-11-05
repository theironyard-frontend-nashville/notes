$.ajax('https://api.github.com/users/nicerhugs/repos').done(function(data) {
  console.log(_.sortBy(data, function(current) {
    return current.updated_at;
  })
  )
})
