export const shape_list = (radius, padding, points) => {
        let width = (radius * 2) + padding
        let shape_list = []
      
        for (let i=0; i<points; i++) {
            let angle = (i / (points/2)) * Math.PI; // Calculate the angle at which the element will be placed.
                                                  // For a semicircle, we would use (i / numNodes) * Math.PI.
            let x = (radius * Math.cos(angle)) + (width/2); // Calculate the x position of the element.
            let y = (radius * Math.sin(angle)) + (width/2);
            shape_list.push([x, y])
        }
        return shape_list;
}

export default shape_list;