function sum(n1, n2) {
  return n1 + n2
}

test('2 + 2  = 4', () => {
  expect(sum(2, 2)).toBe(4)
});


test('2 + 2  = 22', () => {
  expect(sum("2", "2")).toBe("22")
});


function array(array) {
  return array
}



test('[1,2] + 3 sama dengan [1,2,3]', () => {
  const arr = [1, 2]
  arr.push(3)
  expect(array(arr)).toEqual([1, 2, 3])
});

test("tidak ada nilai 0 dalam penjumlah 1 sampai 10", () => {
  for (let i = 1; i < 10; i++) {
    for (let x = 1; x < 10; x++) {
      expect(x + i).not.toBe(0)
    }
  }
})

///truthiness 
function x(n1, n2, result) {
  let f = n1 + n2
  return f === result
}

test("1+1 = 1 true", () => {
  expect(x(1, 1, 2)).toBeTruthy()
})

test("1+1 = 6 false", () => {
  expect(x(1, 1, 6)).toBeFalsy()
})

test("propery object dari nama sama dengan null", () => {
  const obj = {
    nama: null,
  }
  expect(obj.nama).toBeNull()
})

test("propery object dari alamat sama dengan undefined", () => {
  const obj = {
    alamat: undefined,
  }
  expect(obj.alamat).toBeUndefined()
  expect(obj.alamat).not.toBeDefined()
})


test("propery object dari alamat sama dengan jl. margahayu jakarta utara", () => {
  const obj = {
    alamat: "jl. margahayu jakarta utara",
  }
  expect(obj.alamat).toBeDefined()
  expect(obj.alamat).not.toBeUndefined()
})

const day = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]

test("ada hari sabtu pada table day", () => {
  expect(day).toContain("sabtu")
})

function ErrorSystem() {
  throw new Error("REPONSE FAILED ERROR 500")
}
test('compiling api get an error', () => {
  expect(()=>ErrorSystem()).toThrow(Error)
})