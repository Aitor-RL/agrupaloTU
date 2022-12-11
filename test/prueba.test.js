import { describe, expect, it } from "vitest";
import {createRandomGroups}  from '../src/utils'

describe("empty spec", () => {
  it("empty", () => {
    const persons = ['ivana','juana','ana','marina','diana']
    const data = createRandomGroups(persons,2)
    expect(data.noGroups).toHaveLength(1)
    expect(data.inGroups).toHaveLength(2)
    expect(data.inGroups[0]).toHaveLength(2)
    expect(data.inGroups[1]).toHaveLength(2)
    
    
    expect(persons).includes(data.inGroups[0][0])
    expect(persons).includes(data.inGroups[0][1])
    expect(persons).includes(data.inGroups[1][0])
    expect(persons).includes(data.inGroups[1][1])
  });
});


