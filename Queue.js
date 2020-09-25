class Queue {
  constructor(){
    this.queue = []
    this.size = 0
  }

  isEmpty(){
    return this.size === 0;
  }

  poll(){
    if(this.isEmpty()) return "Queue is Empty"
    this.size--
    return this.queue.shift()
  }

  offer(value){
    this.size++
    this.queue.push(value)
  }


}


const queue = new Queue()
queue.offer(1)
queue.offer(2)
queue.offer(3)
queue.offer(4)
queue.poll()
queue.poll()
console.log(queue.queue)
