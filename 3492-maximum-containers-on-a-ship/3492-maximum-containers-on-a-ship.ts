function maxContainers(n: number, w: number, maxWeight: number): number {
    let totalWeight = (n * n) * w;
    let container=n*n
    while (totalWeight > maxWeight && container > 0) {
        container--; 
        totalWeight = (container) * w;
    }
    
    return container;
}