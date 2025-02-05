export default function serializeDLL(dll) {
  let current = dll.head;
  let result = [];

  while (current) {
    result.push({
      value: current.value,
      prev: current.prev ? current.prev.value : null,
      next: current.next ? current.next.value : null,
    });
    current = current.next;
  }

  return JSON.stringify(
    {
      head: dll.head ? dll.head.value : null,
      tail: dll.tail ? dll.tail.value : null,
      length: dll.length,
      nodes: result,
    },
    null,
    2
  );
}
