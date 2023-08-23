function tupleCreator<T>(first: T) {
  return function finish<S>(last: S): [T, S] {
    return [first, last];
  };
}

const finishTuple = tupleCreator(3);

const t1 = finishTuple(undefined);

const t2 = finishTuple([4, 8, 12, 16]);
